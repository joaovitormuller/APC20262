# Exercício 2 — Tamanhos e promoção

## Descrição

Exibe o tamanho em bytes de cada tipo, o comportamento da divisão entre inteiros e o que ocorre quando um `unsigned` é decrementado abaixo de zero.

## Execução

No [PythonTutor](https://pythontutor.com/c.html): colar o conteúdo de `main.c`, clicar em **Visualize Execution** e avançar com **Next**.

No terminal:

```bash
gcc -Wall -Wextra -std=c11 -o main main.c
./main
```

## Saída

```
char:      1 byte(s)
short:     2 byte(s)
int:       4 byte(s)
long:      8 byte(s)
long long: 8 byte(s)
float:     4 byte(s)
double:    8 byte(s)

7 / 2   = 3
7.0 / 2 = 3.5
(int)3.9= 3
0u - 1  = 4294967295
```

Saída obtida em Linux 64 bits. Em outros sistemas, o tamanho de `long` pode ser diferente.

## Observações

- Em Linux 64 bits, `long` ocupa 8 bytes. Em outros sistemas esse valor pode ser 4.
- `7 / 2` resulta em 3, pois os dois operandos são inteiros e a parte decimal é descartada.
- `7.0 / 2` resulta em 3.5, pois um dos operandos é decimal.
- `(int)3.9` resulta em 3: a conversão descarta a parte decimal, sem arredondar.
- Subtrair 1 de um `unsigned int` com valor 0 resulta em 4294967295, o maior valor representável pelo tipo.

## Conclusão

O tipo dos operandos determina o resultado das operações. Divisões entre inteiros e o comportamento de tipos `unsigned` produzem resultados diferentes dos obtidos em Python, sem qualquer aviso do compilador.
