document.addEventListener("DOMContentLoaded", function () {
    fetch("datos.json")
      .then(response => {
        if (!response.ok) {
          throw new Error("No se pudo cargar los datos.");
        }
        return response.json();
      })
      .then(data => {
        // Insertar nombre
        document.getElementById("name").textContent = data.nombre;
  
        // Insertar enlaces
        const enlaces = {
          facebookLink: data.redes.find(red => red.titulo === "Facebook")?.url || "#",
          instagramUser: data.redes.find(red => red.titulo === "Instagram")?.url || "#",
          githubUser: data.redes.find(red => red.titulo === "GitHub")?.url || "#"
        };
  
        Object.keys(enlaces).forEach(id => {
          document.getElementById(id).href = enlaces[id];
        });
      })
      .catch(error => console.error("Error al cargar los datos:", error));
  });
  
