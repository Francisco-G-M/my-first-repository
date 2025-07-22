lista_productos = ["Leche", "Pan", "Huevos"]
lista_productos.append(input("Ingrese otro producto: "))
añadir_principio = input("Ingrese otro producto por favor: ")
lista_productos.insert(0, añadir_principio)
elementos_lista = len(lista_productos)
print(f"La lista actualizada hasta ahora es: {lista_productos}, la cual tiene: {elementos_lista} productos")
lista_productos.sort()
print(lista_productos)
elemento_eliminar = input("Cual de los productos desea eliminar: ")
if elemento_eliminar in lista_productos:
    lista_productos.remove(elemento_eliminar)
    print(lista_productos)
else:
    print(input("Incorrecto, ese producto no se encuentra en su lista, por favor repita el proceso"))