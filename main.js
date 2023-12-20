
document.addEventListener("DOMContentLoaded", function ()
{
    const textElement = document.getElementById("name");
    // Text to add into the header
    const textToType = "MIJN NAAM IS DYLAN VAN DER HORST";
    let charIndex = 0;

    function typeCharacter()
    {
        if (charIndex < textToType.length)
        {
            const char = textToType.charAt(charIndex);
            textElement.innerHTML += char;
            charIndex++;
            setTimeout(typeCharacter, 75);
        }
    }

    typeCharacter();
});
// Select all links with hashes
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Listen for click event
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        // Get the target section from the href attribute
        const target = document.querySelector(this.getAttribute('href'));

        // Scroll smoothly to the target section
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});




