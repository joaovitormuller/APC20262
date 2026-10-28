# Exercício 9a — Ponteiro básico e derreferência

## Descrição

Conceito de ponteiro: uma variável que armazena o endereço de outra.

## Execução

No [PythonTutor](https://pythontutor.com/c.html): colar o conteúdo de `main.c`, clicar em **Visualize Execution** e avançar com **Next**.

No terminal:

```bash
gcc -Wall -Wextra -std=c11 -o main main.c
./main
```

## Saída

```
x    = 10
&x   = 0x7ffeb2d9373c
p    = 0x7ffeb2d9373c
*p   = 10
x apos *p=99: 99
```

Os endereços variam a cada execução.

## Observações

- `&x` e `p` exibem o mesmo endereço.
- `*p` acessa o valor armazenado nesse endereço: 10.
- `*p = 99` altera o valor de `x` para 99.
- No PythonTutor, `p` é representado por uma seta apontando para `x`.

## Conclusão

O operador `&` obtém o endereço de uma variável, e o operador `*` acessa o valor armazenado no endereço contido em um ponteiro.
