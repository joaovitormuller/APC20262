# Exercício 13 — Formatação e E/S de arquivo

## Descrição

Formatos do `printf` e gravação e leitura de arquivos de texto.

## Execução

No [PythonTutor](https://pythontutor.com/c.html): colar o conteúdo de `main.c`, clicar em **Visualize Execution** e avançar com **Next**.

No terminal:

```bash
gcc -Wall -Wextra -std=c11 -o main main.c
./main
```

## Saída

```
Decimal:     255
Hex:         ff
Octal:       377
Float:       3.1416
Cientifico:  3.141590e+00
Alinhado:          3.14
String:      Brasilia  |
Ponteiro:    0x7fff5fab70d7
lido: 255 3.14 Brasilia
```

O endereço do ponteiro varia a cada execução.

## Observações

- 255 é exibido como `ff` em hexadecimal e `377` em octal.
- `%10.2f` ocupa 10 posições, com 2 casas decimais.
- `%-10s|` alinha o texto à esquerda, completando com espaços.
- O programa grava uma linha em `/tmp/teste.txt` e a lê novamente com `fscanf`.

## Conclusão

O `printf` permite controlar base numérica, largura, alinhamento e casas decimais. Na leitura com `fscanf`, o formato para `double` é `%lf`, diferente do `%f` utilizado no `printf`.
