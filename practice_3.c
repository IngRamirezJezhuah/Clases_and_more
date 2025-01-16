#include <stdio.h>

// Función para calcular el tiempo de pago
int values(float balance, float target, float payment, float interest){//debo de definir las partes
    if (balance >= target){
        balance = balance * (1 + interest); // Actualiza el balance con el interés
        balance = balance - payment; // Resta la cuota de pago del balance
        return 1; // Devuelve 1 si se ha pagado la deuda
    } else {
        return 0; // Devuelve 0 si no se ha pagado la deuda
    }
}

int main(){
    float balance;
    float payment;
    float target;
    float interest = 0.10; //se supone que el Interés anual del 10%
    int años = 0; // Variable para almacenar el número de años

    // Pide los inputs al usuario
    printf("Cuánto vas a pedir: \n >");
    scanf(" %f", &balance);

    printf("Cuánto vas a pagar anualmente: \n >");
    scanf("%f", &payment);

    printf("Cuánto es el objetivo: \n >");
    scanf("%f", &target);

    //tengo que simular el pago anual
    while (balance > 0){
        balance = balance * (1 + interest); //esto debe de actualiza el balance con el interés
        balance = balance - payment; //entonces aqui resto la cuota del balance pagado
        años++;
    }

    // Aqui ahora muestra la salida
    printf("Te queda: %.2f \n", balance);
    printf("El número de años es: %d \n", años);
    return 0;
}