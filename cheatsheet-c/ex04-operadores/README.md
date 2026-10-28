# Exercício 4 — Divisão inteira, módulo, incremento e bits

## Descrição

Aborda divisão inteira, resto (`%`), pré e pós-incremento, operador ternário e operações bit a bit.

## Execução

No [PythonTutor](https://pythontutor.com/c.html): colar o conteúdo de `main.c`, clicar em **Visualize Execution** e avançar com **Next**.

No terminal:

```bash
gcc -Wall -Wextra -std=c11 -o main main.c
./main
```

## Saída

```
17 / 5 = 3
17 % 5 = 2
pre=4  pos=4  x=5
max = 17
flags = 36  (0x24)
flags sem bit2 = 32
```

## Observações

- `17 / 5` resulta em 3 e `17 % 5` resulta em 2.
- `pre = ++x`: `x` é incrementado para 4 e depois atribuído a `pre`.
- `pos = x++`: o valor 4 é atribuído a `pos` e depois `x` é incrementado para 5.
- `(a > b) ? a : b` retorna 17.
- `flags |= (1 << 2)` liga o bit 2 (valor 4) e `flags |= (1 << 5)` liga o bit 5 (valor 32), totalizando 36 (`0x24`).
- `flags &= ~(1 << 2)` desliga o bit 2, restando 32.

## Conclusão

A posição do operador `++` define se o incremento ocorre antes ou depois do uso do valor. As operações bit a bit permitem ligar, desligar e testar bits individuais de um número.
