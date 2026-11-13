const contactConfig = {
      email: 'YOUR_EMAIL@example.com',
      whatsappNumber: '60123456789',
      whatsappDisplay: '+60 12-345 6789'
    };

    const contactDialog = document.getElementById('contact-dialog');
    const openContact = document.getElementById('open-contact');
    const closeContact = document.getElementById('close-contact');
    const emailLink = document.getElementById('email-link');
    const whatsappLink = document.getElementById('whatsapp-link');

    emailLink.href = `mailto:${contactConfig.email}`;
    document.getElementById('email-text').textContent = contactConfig.email;
    whatsappLink.href = `https://wa.me/${contactConfig.whatsappNumber}`;
    document.getElementById('whatsapp-text').textContent = contactConfig.whatsappDisplay;

    openContact.addEventListener('click', () => contactDialog.showModal());
    closeContact.addEventListener('click', () => contactDialog.close());
    contactDialog.addEventListener('click', (event) => {
      if (event.target === contactDialog) contactDialog.close();
    });

    document.getElementById('year').textContent = new Date().getFullYear();

    document.querySelectorAll('.project').forEach((project) => {
      project.addEventListener('click', () => {
        const isOpen = project.classList.contains('active');
        document.querySelectorAll('.project.active').forEach((openProject) => {
          openProject.classList.remove('active');
          openProject.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          project.classList.add('active');
          project.setAttribute('aria-expanded', 'true');
        }
      });
    });
