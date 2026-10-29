#include <stdio.h>

#define MAX_PESSOAS 1000
#define TAM_LINHA 256
#define TAM_NOME 100

typedef struct {
    char nome[TAM_NOME];
    int idade;
    float altura;
} Pessoa;

void le_pessoas(void) {
    Pessoa lista[MAX_PESSOAS];
    char linha[TAM_LINHA];
    int n = 0;

    while (n < MAX_PESSOAS && fgets(linha, sizeof(linha), stdin) != NULL && linha[0] != '\n') {
        if (sscanf(linha, "%99s%d%f", lista[n].nome, &lista[n].idade, &lista[n].altura) == 3)
            n++;
    }

    if (n == 0) {
        printf("Nenhuma pessoa lida.\n");
        return;
    }

    int soma = 0;
    for (int i = 0; i < n; i++)
        soma += lista[i].idade;

    int idoso = 0;
    for (int i = 1; i < n; i++)
        if (lista[i].idade > lista[idoso].idade)
            idoso = i;

    printf("Media das idades: %.2f\n", (float)soma / n);
    printf("Pessoa mais idosa: %s, altura %.2f\n", lista[idoso].nome, lista[idoso].altura);
}

int main(void) {
    le_pessoas();
    return 0;
}
