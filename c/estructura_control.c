#include <stdio.h>
int main()
{
    /* code */
    int testInteger;
    printf("Enter an integer: ");
    scanf("%d", &testInteger);
    if (testInteger > 5)
    {
        printf("el numeor es mayor a 5 \n");
    } else if(testInteger == 5){
        printf("el numer es igual que 5 \n");
    } else if(testInteger <5) {
        printf("el numero es menor o igual que 5 \n");
    }
    return 0;
}

//        if ( &numero > 5){
//            prinf("x es mayor que 5 \n");
//        } else {
//            prinf("x es menor o igual que 5\n");
//        }


