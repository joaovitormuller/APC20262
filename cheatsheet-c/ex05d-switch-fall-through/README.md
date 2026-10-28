# Exercício 5d — switch com fall-through

## Descrição

O `switch` com vários `case` agrupados e o papel do `break`.

## Execução

No [PythonTutor](https://pythontutor.com/c.html): colar o conteúdo de `main.c`, clicar em **Visualize Execution** e avançar com **Next**.

No terminal:

```bash
gcc -Wall -Wextra -std=c11 -o main main.c
./main
```

## Saída

```
Dia util
```

## Observações

- Com `dia = 3`, a execução entra no `case 3` e segue até o `printf("Dia util")`.
- Os `case` de 1 a 5 não possuem código próprio e compartilham o mesmo `printf` (*fall-through*).
- O `break` impede que a execução continue até o `printf("Fim de semana")`.

## Conclusão

Sem o `break`, a execução continua nos `case` seguintes. Esse comportamento permite agrupar casos, mas também pode gerar saídas indesejadas quando o `break` é omitido.
