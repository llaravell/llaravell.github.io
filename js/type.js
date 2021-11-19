new TypeIt('#header-text', {
    strings: 'به وبسایت <strong class="red-text">codexion</strong> خوش آمدید',
    speed: 100,
    waitUntilVisible: true
})
.pause(500)
.delete()
.pause(500)
.type('اینچا')
.pause(300)
.delete(5)
.type('اینجا میتونی قالب های جالبی پیدا کنی')
.go();
    