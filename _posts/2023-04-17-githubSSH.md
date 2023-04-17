---
layout: post
title: Chave SSH no github - Windows e Linux
author: Ryan Souza
summary: Como adicionar uma chave SSH ao github para que você não precise digitar sempre que for fazer um push ou pull.
image: /assets/img/blog/2023-04-17-sshGithub/wallpaper.jpg
imageAlt: Uma estatueta de um oktokat (Mascote do github) ao centro, ao fundo um laptop com a página principal do GitHub aberta.
tags: [Github, SSH, Windows, Linux]
---

- [O que é uma chave SSH?](#o-que-é-uma-chave-ssh)
- [Gerando uma chave SSH](#gerando-uma-chave-ssh)
  - [Linux](#linux)
  - [Windows](#windows)
- [Conclusão](#conclusão)

## O que é uma chave SSH?

Uma chave SSH é um par de chaves que são usadas para autenticar um usuário em um servidor. A chave pública é usada para criptografar os dados e a chave privada é usada para descriptografar os dados. A chave pública é compartilhada com o servidor e a chave privada é mantida em segredo pelo usuário.

existem diversos tipos de algoritmos de criptografia para gerar chaves SSH, mas neste tutorial eu vou ensinar como gerar uma chave SSH usando o algoritmo ED25519. O algoritmo ED25519 é um algoritmo de assinatura digital de curva elíptica que é considerado seguro e rápido.

para saber mais sobre o tema, eu indico esse artigo da Teleport: [Artigo](https://goteleport.com/blog/comparing-ssh-keys/) (em inglês)

## Gerando uma chave SSH

A partir de agora irei separar esse tutorial em duas partes, uma para Linux e outra para Windows.

Antes de começar, você precisa ter o git instalado em sua máquina. Se você não tem, indico a documentação oficial do git para instalar o git em sua máquina: [Documentação](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### Linux

Para gerar uma chave SSH no Linux, você precisa abrir o terminal e digitar o seguinte comando:

```bash
ssh-keygen -t ed25519 -C <seu-email>
```

![ssh-keygen](/assets/img/blog/2023-04-17-sshGithub/linux/linuxGenerateSSHKey.png)

Após digitar o comando, você vai ser solicitado a digitar um nome para a chave. Você pode digitar o nome que quiser, mas eu indico que você digite o nome `id_ed25519` para que o git reconheça a chave automaticamente.

Com a chave gerada você deve copiar a chave pública para a área de transferência. Para isso, navegue ate a pasta onde a chave foi gerada (por padrão ela fica na pasta `~/.ssh`, como mostrado na imagem anterior) e digite o seguinte comando:

```bash
cat id_ed25519.pub
```

e copie a chave que aparecer na tela.

![ssh-keygen](/assets/img/blog/2023-04-17-sshGithub/linux/linuxSSHKey.png)

Agora você precisa ir até a página de configurações do github e adicionar a chave que você acabou de copiar.

aqui um atalho para você ir direto para a página de configurações de chaves SSH do github: [Página de configurações de chaves SSH](https://github.com/settings/keys)

aqui você deve ir em `New SSH key` e cole a chave que você copiou anteriormente.

![ssh-keygen](/assets/img/blog/2023-04-17-sshGithub/linux/linuxGithubSSH.png)

Clicando em Add SSH key, você vai adicionar a chave SSH ao github.

Pronto, agora é só testar se a chave foi adicionada corretamente e fazer dar clone de qualquer repositório que você tenha acesso sempre utilizando o endereço SSH. Para testar se a cahve foi adicionada corretamente, você pode digitar o seguinte comando:

```bash
ssh git@github.com
```

se tudo der certo, você vai ver uma mensagem de sucesso e você já pode fazer o clone de qualquer repositório que você tenha acesso, no meu caso eu fiz o clone do meu próprio repositório.

![ssh-keygen](/assets/img/blog/2023-04-17-sshGithub/linux/linuxTestSSH.png)

### Windows

Mesmo processo do linux com a exceção de que aqui eu usei o powershell para criar a chave SSH e o git bash para testar a chave SSH.

Primeiro você precisa abrir o powershell e digitar o seguinte comando:

```powershell
ssh-keygen -t ed25519 -C <seu-email>
```

substitua `<seu-email>` pelo seu email do github.

![ssh-keygen](/assets/img/blog/2023-04-17-sshGithub/windows/windowsGenerateSSHKey.png)

Após digitar o comando, você vai ser solicitado a digitar um nome para a chave, você pode digitar o nome que quiser, mas eu indico que você digite o nome `id_ed25519` para que o git reconheça a chave automaticamente.

Com a chave gerada você deve copiar a chave pública para a área de transferência. Para isso, navegue ate a pasta onde a chave foi gerada (por padrão ela fica na pasta `C:\Users\ryans\.ssh`, como mostrado na imagem anterior) e digite o seguinte comando:

```powershell
type id_ed25519.pub
```

e copie a chave que aparecer na tela.

![ssh-keygen](/assets/img/blog/2023-04-17-sshGithub/windows/windowsSSHKey.png)

Enfim, agora você precisa ir até a página de configurações do github e adicionar a chave que você acabou de copiar. aqui um atalho para você ir direto para a página de configurações de chaves SSH do github: [Página de configurações de chaves SSH](https://github.com/settings/keys)

aqui você deve ir em `New SSH key` e cole a chave que você copiou anteriormente.

![ssh-keygen](/assets/img/blog/2023-04-17-sshGithub/windows/windowsGithubSSH.png)

Clicando em Add SSH key, você vai adicionar a chave SSH ao github.

Agora basta verificar o funcionamento da chave SSH. Para isso, você precisa abrir o git bash e digitar o seguinte comando:

```bash
ssh git@github.com
```

se tudo der certo, você vai ver uma mensagem de sucesso e você já pode fazer o clone de qualquer repositório que você tenha acesso, no meu caso eu fiz o clone do meu próprio repositório.

![ssh-keygen](/assets/img/blog/2023-04-17-sshGithub/windows/windowsTestSSH.png)

## Conclusão

Espero que esse tutorial tenha ajudado você a configurar a sua chave SSH no github. Se você tiver alguma dúvida, você pode entrar em contato comigo pela aba de [Contato]({{ "/contact/" | relative_url }}) do meu site ou pelo meu email pessoal que está logo aqui abaixo do meu site.
