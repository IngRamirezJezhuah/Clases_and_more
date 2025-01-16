#include <stdio.h>
//Es lo que va a regresar 1 si es menor o igual a 100 cuando la variable  debe que decir el costo final se úede conseguir mulitplicando por.9
//float 2000 10% = 200,   18000 10% = 180,   1620 10% = 180, 1458 
int cuenta;
int n = 0;//este contador hace la suma de cuantas veces de realiza nuevamente
float descuento = 0;// se tiene que escribir otra vez guardandolo en una variable para que sirva otra vez y lo sume cada vez que se vuelve a realizar
int Contador(float num_fact) {
    if (num_fact <= 1000) {
        return num_fact;
    } 
        n++;//Contador auntoincrementable
        descuento = descuento + (num_fact *.1);//variable
        return Contador(num_fact*0.9);

}

int main() {
    float num;
    printf("Ingresa el total a pagar: ");
    scanf("%f", &num);
    float total = Contador(num);
    printf("cUANTO ES A PAGAR de es: %.2f\n", total);
    printf("el numero de veces aplicado es %d y el descuento aplicado fue:  %.2f \n", n, descuento);
    return 0;
} 
