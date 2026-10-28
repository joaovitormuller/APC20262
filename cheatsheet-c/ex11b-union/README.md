# Exercício 11b — Union: membros compartilham memória

## Descrição

Em uma `union`, todos os campos compartilham a mesma área de memória.

## Execução

No [PythonTutor](https://pythontutor.com/c.html): colar o conteúdo de `main.c`, clicar em **Visualize Execution** e avançar com **Next**.

No terminal:

```bash
gcc -Wall -Wextra -std=c11 -o main main.c
./main
```

## Saída

```
d.i='65'  d.c='A'
d.f=3.14
```

## Observações

- Após `d.i = 65`, `d.c` vale `'A'`, pois 65 é o código ASCII da letra A.
- Após `d.f = 3.14f`, o valor de `d.i` deixa de ter significado, pois os mesmos bytes passam a representar um número decimal.

## Conclusão

Apenas um campo da union contém um valor válido por vez. O tamanho da union corresponde ao tamanho do seu maior campo.
