monto_total = float(input("Ingrese el monto total: "))
propina = float(input("Ingrese el porcentaje de propina que le gustaría dejar: "))
monto_total_propina = (monto_total*propina)/100
monto_total_cuenta = monto_total + monto_total_propina
print(f"El monto total de la propina es: {monto_total_propina}")
print(f"El monto total de la cuenta es: {monto_total_cuenta}")