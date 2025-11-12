nome_cliente = input("Digite o nome do cliente: ")
dia_vencimento = int(input("Digite o dia de vencimento: "))
mes_vensimento = input("Digite o mês de vencimento: ")
valor_fatura = float(input("Digite o valor da fatura: "))

print(f"Olá, {nome_cliente}")
print(f"Sua fatura com vencimento em {dia_vencimento} de {mes_vensimento} no valor de R$ {valor_fatura:.2f} está fechada.")