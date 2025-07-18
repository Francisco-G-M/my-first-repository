agenda = []
usuario_1 = (input("Ingrese su nombre: "), input("Ingrese su telefono: "))
usuario_2 = (input("Ingrese su nombre: "), input("Ingrese su telefono: "))
agenda.append(usuario_1)
agenda.append(usuario_2)
print(agenda)
for nombre, telefono in agenda:  
    print(f"Contacto: {nombre}, Telefono: {telefono}")
# print(f"Contacto: {agenda[0][0]}, Telefono: {agenda[0][1]}") esta es mi versión original
# print(f"Contacto: {agenda[1][0]}, Telefono: {agenda[1][1]}")
"""Use IA para que me corrija la versión original del bucle, el cual era:
 for usuario in agenda:
    for num in agenda:
        print(f"Contacto: {agenda[usuario][num]}, Telefono: {agenda[usuario][num]}")"""