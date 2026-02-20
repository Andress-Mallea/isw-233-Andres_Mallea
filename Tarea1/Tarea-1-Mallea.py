import socket
import sys
import pyaudio

FORMATO = pyaudio.paInt8      
CANALES = 1                 
RATIO = 44100                 
CHUNK = 65000                
FRAME_SIZE = 1               

def StartServer(port):
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    sock.bind(('', port))
    Audio = pyaudio.PyAudio()
    stream = Audio.open(format=FORMATO, channels=CANALES, rate=RATIO, output=True)
    
    print(f"Servidor listo en el puerto {port}. Esperando audio :)")

    while True:
        data, direccion = sock.recvfrom(CHUNK * FRAME_SIZE)
        frames_to_play = len(data) // FRAME_SIZE
        stream.write(data)
        print(f"Reproduciendo {frames_to_play} frames de {direccion}")
def StartClient(port):
    serveridor_ip = input("Ingrese la dirección IP del servidor: ")
    sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    
    microfono = pyaudio.PyAudio()
    stream = microfono.open(format=FORMAT, channels=CHANNELS, rate=RATE, input=True)
    
    print("Grabando audio (máx 1.5 segundos)")
    frames = stream.read(CHUNK)
    bytes_to_send = len(frames) * FRAME_SIZE

    sock.sendto(frames, (serveridor_ip, port))
    print(f"Audio enviado ({bytes_to_send} bytes).")
    stream.stop_stream()
    stream.close()
    microfono.terminate()
    
if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Uso: python walkie.py [client|server] [puerto]")
        sys.exit()
    mode = sys.argv[1].lower()
    port = int(sys.argv[2])
    if mode == "server":
        StartServer(port)
    elif mode == "client":
        StartClient(port)
    else:
        print("Modo no válido. Use 'client' o 'server'.")
        