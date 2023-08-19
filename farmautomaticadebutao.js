const botao = document.getElementById('add')
        const novbut = document.createElement('button').textContent = 'nig'
        var count = 0

        botao.addEventListener('click', function(){
            count = count + 1
            const novbut = document.createElement('button')
            novbut.textContent = `butao ${count}`;
            document.body.appendChild(novbut)

        })