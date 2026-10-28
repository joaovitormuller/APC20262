# Exercício 9c — Ponteiro para ponteiro

## Descrição

Ponteiro que armazena o endereço de outro ponteiro (`int **`).

## Execução

No [PythonTutor](https://pythontutor.com/c.html): colar o conteúdo de `main.c`, clicar em **Visualize Execution** e avançar com **Next**.

No terminal:

```bash
gcc -Wall -Wextra -std=c11 -o main main.c
./main
```

## Saída

```
x   = 42
*p  = 42
**pp= 42
x apos **pp=100: 100
```

## Observações

- `pp` aponta para `p`, que aponta para `x`.
- `*p` e `**pp` retornam 42.
- `**pp = 100` altera `x` diretamente.

## Conclusão

Cada `*` percorre um nível de indireção. Esse recurso é utilizado quando uma função precisa alterar um ponteiro recebido como parâmetro, como no exercício 18.
