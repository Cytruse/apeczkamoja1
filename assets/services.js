(function(){
    function initServiceSearch() {
        const input = document.querySelector('[data-service-search]');
        if (!input) return;

        const services = Array.from(document.querySelectorAll('.service'));
        const emptyState = document.querySelector('[data-services-empty]');

        function updateVisibility() {
            const term = input.value.trim().toLowerCase();
            let visibleCount = 0;

            services.forEach(service => {
                const label = service.querySelector('.service_name');
                const text = label ? label.textContent.toLowerCase() : '';
                const matches = !term || text.includes(term);
                service.style.display = matches ? '' : 'none';
                if (matches) visibleCount++;
            });

            if (emptyState) {
                emptyState.hidden = visibleCount !== 0;
            }
        }

        input.addEventListener('input', updateVisibility);
        updateVisibility();
    }

    document.addEventListener('DOMContentLoaded', initServiceSearch);
})();
