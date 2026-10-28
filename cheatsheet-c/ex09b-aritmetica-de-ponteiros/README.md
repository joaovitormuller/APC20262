# Exercício 9b — Aritmética de ponteiros

## Descrição

Aritmética de ponteiros sobre um vetor.

## Execução

No [PythonTutor](https://pythontutor.com/c.html): colar o conteúdo de `main.c`, clicar em **Visualize Execution** e avançar com **Next**.

No terminal:

```bash
gcc -Wall -Wextra -std=c11 -o main main.c
./main
```

## Saída

```
*p     = 10
*(p+1) = 20
*(p+2) = 30
q - p  = 3
apos p++: *p = 20
```

## Observações

- `p` aponta para `v[0]`. `*(p+1)` vale 20 e `*(p+2)` vale 30.
- `q - p` resulta em 3, a distância em elementos.
- Após `p++`, `p` aponta para `v[1]`.

## Conclusão

Somar 1 a um ponteiro avança o tamanho de um elemento do tipo apontado, não 1 byte. Por isso `v[i]` e `*(v + i)` são equivalentes.
