# Guia Completo: Publicar no GitHub Pages

## Passo 1: Inicializar o Git e fazer o primeiro commit

Abra o terminal na pasta do projeto e execute:

```bash
# Inicializar repositório Git
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Initial commit - Portfolio DanProject"
```

## Passo 2: Criar repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique no botão **"+"** no canto superior direito → **"New repository"**
3. Configure o repositório:
   - **Repository name**: `danproject-portfolio` (ou o nome que preferir)
   - **Description**: "Portfolio profissional de design gráfico"
   - **Public** (deixe público para usar GitHub Pages gratuitamente)
   - **NÃO** marque "Add a README file"
   - **NÃO** adicione .gitignore ou license (já temos)
4. Clique em **"Create repository"**

## Passo 3: Conectar seu projeto ao GitHub

Copie o link do repositório que aparecerá (algo como `https://github.com/seu-usuario/danproject-portfolio.git`) e execute:

```bash
# Adicionar o repositório remoto (substitua pela URL do seu repositório)
git remote add origin https://github.com/SEU-USUARIO/SEU-REPOSITORIO.git

# Renomear a branch para main (se necessário)
git branch -M main

# Fazer o push inicial
git push -u origin main
```

## Passo 4: Ativar GitHub Pages

1. No seu repositório no GitHub, vá em **Settings** (Configurações)
2. No menu lateral esquerdo, clique em **Pages**
3. Em **"Source"**, selecione:
   - **Source**: GitHub Actions
4. Salve as configurações

## Passo 5: Aguardar o Deploy

1. Vá na aba **Actions** do seu repositório
2. Você verá o workflow "Deploy to GitHub Pages" rodando
3. Aguarde até aparecer um ✅ verde (leva ~2-3 minutos)
4. Volte em **Settings → Pages** e você verá o link do seu site publicado!

## URL do Site

Seu site estará disponível em:
```
https://SEU-USUARIO.github.io/SEU-REPOSITORIO/
```

## Atualizações Futuras

Para atualizar o site depois:
```bash
git add .
git commit -m "Descrição da mudança"
git push
```

O GitHub Actions fará o deploy automaticamente! 🚀

---

## Troubleshooting

**Se o site não carregar:**
- Verifique se a Action rodou com sucesso (aba Actions)
- Confirme que GitHub Pages está configurado para "GitHub Actions"
- Aguarde 5-10 minutos após o primeiro deploy

**Se aparecer erro 404:**
- Verifique se o repositório é público
- Confirme que a pasta `dist` foi gerada corretamente no build
