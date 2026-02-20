import socket
import random
import sys
class SeabattleField:
    
    def __init__(self):
        self.tablero = [
        ['-','-','-','-','-','-','-','-'],
        ['-','-','-','-','-','-','-','-'],
        ['-','-','-','-','-','-','-','-'],
        ['-','-','-','-','-','-','-','-'],
        ['-','-','-','-','-','-','-','-'],
        ['-','-','-','-','-','-','-','-'],
        ['-','-','-','-','-','-','-','-'],
        ['-','-','-','-','-','-','-','-']
        ]
        self.vistaoponente = [
        ['-','-','-','-','-','-','-','-'],
        ['-','-','-','-','-','-','-','-'],
        ['-','-','-','-','-','-','-','-'],
        ['-','-','-','-','-','-','-','-'],
        ['-','-','-','-','-','-','-','-'],
        ['-','-','-','-','-','-','-','-'],
        ['-','-','-','-','-','-','-','-'],
        ['-','-','-','-','-','-','-','-']
        ]
        self.tamano = 8
        self.barcos = [4, 3, 3, 2,2,2,1,1,1,1]
        pass
    def colocar_barco(self, tamano):
        intentos = 0
        while intentos < 1000: 
            horizontal = random.choice([True, False])
            if horizontal:
                fila = random.randint(0, 7)
                columna = random.randint(0, 8 - tamano)
                if all(self.tablero[fila][columna + i] == '-' for i in range(tamano)): 
                    if all(self.tablero[fila + dy][columna + dx] == '-' for dy in [-1, 0, 1] for dx in range(-1, tamano + 1) if 0 <= fila + dy < 8 and 0 <= columna + dx < 8):
                        for i in range(tamano):
                            self.tablero[fila][columna + i] = 'B'
                        return True
            else:
                fila = random.randint(0, 8 - tamano)
                columna = random.randint(0, 7)
                if all(self.tablero[fila + i][columna] == '-' for i in range(tamano)):
                    if all(self.tablero[fila + dy][columna + dx] == '-' for dy in range(-1, tamano + 1) for dx in [-1, 0, 1] if 0 <= fila + dy < 8 and 0 <= columna  + dx < 8):
                        for i in range(tamano):
                            self.tablero[fila + i][columna] = 'B'
                        return True
            intentos += 1
        return False  
    
    def imprimir_tablero(self):
        print("  " + " ".join(map(str, range(1, 11))))
        for i, fila in enumerate(self.vistaoponente):
            print(f"{chr(65 + i)}| {' '.join(fila)} |{chr(65 + i)}")
    def armar_tablero(self, seed):
        random.seed(seed)
        for tamano in self.barcos:
            self.colocar_barco(tamano)
    def mark_miss(self,x,y):
        self.tablero[x][y] = 'X'
        self.vistaoponente[x][y] = 'X'
    def mark_hit(self,x,y):
        self.tablero[x][y] = 'O'
        self.vistaoponente[x][y] = 'O'
    def mark_kill(self,x,y):
        self.tablero[x][y] = '*'
        self.vistaoponente[x][y] = '*'
    def mark(self, x,y):
        if (self.tablero[x][y] == 'B'):
            self.mark_hit(x,y)
        else:
            self.mark_miss(x,y)
    def disparar(self, tablero_opo, x, y):
        if (tablero_opo.tablero[x][y] == 'B'):
            tablero_opo.mark_hit(x,y)
            return True
        else:
            tablero_opo.mark_miss(x,y)
            return False
    def perdio(self):
        for fila in self.tablero:
            for celda in fila:
                if celda == "B":  
                    return False
        return True
        
class SeabattleAgent:
    def __init__(self, field, conn):
        self.field = field
        self.conn = conn 

    def parse_move(self, text):
        try:
            col = ord(text[0].upper()) - ord('A')
            row = int(text[1:]) - 1
            if 0 <= col < 8 and 0 <= row < 8: return col, row
        except: return None
        return None 

    def start_game(self, my_turn):
        while not self.field.perdio(): 
            self.field.imprimir_campos()
            if my_turn:
                shot = input("Tu disparo (ej. A1): ")
                coords = self.parse_move(shot)
                if not coords: 
                    continue
                
                self.conn.sendall(shot[:2].encode('ascii')) 
                res = int(self.conn.recv(1)[0]) 
                
                x, y = coords
                states = {0: 'EMPTY', 1: 'HIT'}
                self.field.vistaoponente[y][x] = states.get(res, 'UNKNOWN')
                
                if res == 0: my_turn = False 
                else: print("¡Repites turno!") 
            else:
                print("Esperando al oponente...")
                data = self.conn.recv(2).decode('ascii')
                tx, ty = self.parse_move(data)
                result = self.field.shoot(tx, ty) 
                self.conn.sendall(bytes([result]))
                if result == 0: my_turn = True
        
        print("Fin del juego. " + ("Perdiste" if self.field.perdio() else "Ganaste"))


if __name__ == "__main__":
    mode = sys.argv[1] 
    seed = int(sys.argv[2])
    
    field = SeabattleField()
    field.armar_tablero(seed)

    if mode == "server":
        port = int(sys.argv[3])
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        s.bind(('0.0.0.0', port))
        s.listen(1)
        print(f"Servidor en puerto {port}...")
        conn, addr = s.accept()
        agent = SeabattleAgent(field, conn)
        agent.start_game(False)
    else:
        ip = sys.argv[3]
        port = int(sys.argv[4])
        conn = socket.create_connection((ip, port))
        agent = SeabattleAgent(field, conn)
        agent.start_game(True) 
    