#include <stdio.h>
int main(){
     //declaracion de variables
    int num1;
    float num2;
    char user[20];
    //lectura de datos
    printf("ingresa un numero entreo: ");
    scanf("%d", &num1);
    printf("ingresa un numero flotante: ");
    scanf("%f", &num2);
    printf("Dime tu nombre: ");
    scanf("%s", &user);

    //impresiones
    printf("la informacion guardada es la siguiente: \n");
    printf("EL numero entero: %d \n", num1);
    printf("El numero flotante: %.2f \n", num2);
    printf("Hola: %s \n",user);

    return 0;
}