# Exercício 7 — Array e matriz

## Descrição

Soma de elementos de um vetor, cópia com `memcpy` e organização de uma matriz na memória.

## Execução

No [PythonTutor](https://pythontutor.com/c.html): colar o conteúdo de `main.c`, clicar em **Visualize Execution** e avançar com **Next**.

No terminal:

```bash
gcc -Wall -Wextra -std=c11 -o main main.c
./main
```

## Saída

```
soma = 150
v[0]=10  w[0]=99
m[1][2] = 6
1 2 3 4 5 6 
```

## Observações

- A soma dos elementos resulta em 150.
- Após o `memcpy`, alterar `w[0]` para 99 não modifica `v[0]`, que permanece 10.
- `m[1][2]` vale 6.
- Percorrendo a matriz com um ponteiro, os valores aparecem em sequência: 1 2 3 4 5 6.

## Conclusão

Vetores não podem ser copiados com `=`; é necessário usar `memcpy`. Uma matriz é armazenada como uma sequência contínua de elementos, linha após linha.
