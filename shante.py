def SalariedCommissionEmployee(sales, bonus):
    salary = 25000
    commission = 0.10
    reg_pay = salary * bonus
    opay = sales * commission
    salary = reg_pay + opay
    print("The salary is:", salary)
    return salary

sales = float(input("Enter sales: "))
bonus = float(input("Enter bonus: "))
SalariedCommissionEmployee(sales, bonus)

