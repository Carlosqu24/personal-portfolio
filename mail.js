function handleSubmit(e) {
    e.preventDefault()

    const form = new FormData(this);

    $btnMailto.setAttribute('src', `mailto:carlosquesadaumana@gmail.com?subject=${form.get('name')}&body=${form.get('message')}`);
    $btnMailto.click();
};