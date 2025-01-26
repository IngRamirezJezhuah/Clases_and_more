#include <stdio.h>
//Agregar un limite de numero para que acepte, un limmite
//hacer que te pida un numero y lo lea
//como hacer una salida y una entrada de texto para recordar
//printf("ingresa un numero entreo: ");
//    scanf("%d", &num1);

int factorial(int num_fact) {
    if (num_fact == 0) {
        return 1;
    } else {
        return num_fact * factorial(num_fact - 1);
    }
}

int main() {
    int num;
    printf("Ingresa un número: ");
    scanf("%d", &num);
    printf("El factorial de %d es: %d\n", num, factorial(num));
    return 0;
}
//hacer que ingrese el usuario el num. a calcular
//limite