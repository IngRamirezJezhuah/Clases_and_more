#

class Factorial:
    def calcular(self,n):
        if n == 0:
            return 1
        return n * self.calcular(n-1)

Factorial = Factorial()
print = (Factorial.calcular(5))
