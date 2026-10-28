# Exercício 8 — Manipulação de strings

## Descrição

Strings como vetores de `char` terminados por `'\0'` e o uso de funções de `<string.h>`.

## Execução

No [PythonTutor](https://pythontutor.com/c.html): colar o conteúdo de `main.c`, clicar em **Visualize Execution** e avançar com **Next**.

No terminal:

```bash
gcc -Wall -Wextra -std=c11 -o main main.c
./main
```

## Saída

```
Comprimento: 8
s[0]='B' ASCII=66
s[1]='r' ASCII=114
s[2]='a' ASCII=97
s[3]='s' ASCII=115
s[4]='i' ASCII=105
s[5]='l' ASCII=108
s[6]='i' ASCII=105
s[7]='a' ASCII=97
strcmp: 0
strcmp: -1
Primeiro 'i' na posição 4
atoi("1234") = 1234
```

## Observações

- `strlen` retorna 8, o número de caracteres de "Brasilia", sem contar o `'\0'`.
- O laço imprime cada caractere com seu código ASCII e termina ao encontrar o `'\0'`.
- `strcmp` retorna 0 para strings iguais e um valor negativo na comparação com "Curitiba".
- `strchr` localiza o primeiro `'i'` e `atoi` converte o texto "1234" em número.

## Conclusão

Em C, uma string não é um tipo próprio, mas um vetor de caracteres com um terminador `'\0'` ao final, utilizado pelas funções da biblioteca para identificar onde o texto termina.
