export function seo(data = {}) {
    data.title = " Alsyahia | " + data.title || 'Alsyahia - السياحية';
    data.metaDescription = data.metaDescription || 'Default description';
  
    document.title = data.title;
    document.querySelector('meta[name="description"]').setAttribute('content', data.metaDescription);
  }