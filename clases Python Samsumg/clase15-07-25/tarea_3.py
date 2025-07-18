frase = input("Ingrese una frase: ")
print(frase.upper())
lista = [frase.split()]
frase2 = []
frase2 = frase.split()
print(f"La longitud de la frase es: {len(frase2)}")
if len(frase2) >= 2:
    numero = 1
    for item in frase2:
        print(f"El {numero} item de la frase es: {item}")
        numero += 1
        