document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    const modalImage = document.getElementById('modalImage');
    const imageUpload = document.getElementById('imageUpload');
    const categorySelect = document.getElementById('categorySelect');
    const imageGallery = document.querySelector('.image-gallery');

    // Filter functionality
    function filterImages(filterValue) {
        const items = document.querySelectorAll('.filter');
        items.forEach(item => {
            if (filterValue === 'all' || item.classList.contains(filterValue)) {
                item.classList.add('show');
            } else {
                item.classList.remove('show');
            }
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            // Apply filter
            const filter = button.getAttribute('data-filter');
            filterImages(filter);
        });
    });

    // Remove button functionality
    function addRemoveListener(container) {
        const removeBtn = container.querySelector('.btn-remove');
        if (removeBtn) {
            removeBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                container.closest('.filter').remove();
            });
        }
    }

    // File upload handler
    imageUpload.addEventListener('change', function(event) {
        const files = event.target.files;
        const category = categorySelect.value;

        if (!category) {
            alert('Por favor, selecciona una categoría antes de subir imágenes');
            event.target.value = '';
            return;
        }

        Array.from(files).forEach(file => {
            const reader = new FileReader();
            
            reader.onload = function(e) {
                const div = document.createElement('div');
                div.className = `col-md-4 filter ${category}`;
                
                const container = document.createElement('div');
                container.className = 'image-container';
                
                const img = document.createElement('img');
                img.src = e.target.result;
                img.className = 'img-fluid gallery-image';
                img.alt = file.name;
                
                const removeBtn = document.createElement('button');
                removeBtn.className = 'btn btn-remove';
                removeBtn.textContent = 'Eliminar';
                
                container.appendChild(img);
                container.appendChild(removeBtn);
                div.appendChild(container);
                
                // Add show class based on current filter
                const currentFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
                if (currentFilter === 'all' || currentFilter === category) {
                    div.classList.add('show');
                }
                
                imageGallery.appendChild(div);
                addRemoveListener(container);

                // Add click event for modal
                img.addEventListener('click', () => {
                    modalImage.src = e.target.result;
                    modal.show();
                });
            };
            
            reader.readAsDataURL(file);
        });

        // Reset file input and category
        event.target.value = '';
        categorySelect.selectedIndex = 0;
    });

    // Category Management
    const categories = new Set(['naturaleza', 'ciudad', 'animales']); // Default categories
    const categoryList = document.getElementById('categoryList');
    const addCategoryForm = document.getElementById('addCategoryForm');
    const filterButtonsContainer = document.getElementById('filterButtons'); // renamed variable

    function updateCategories() {
        // Update category select
        categorySelect.innerHTML = '<option value="" disabled selected>Selecciona una categoría</option>';
        categories.forEach(category => {
            categorySelect.innerHTML += `<option value="${category}">${category}</option>`;
        });

        // Update filter buttons inside the container
        filterButtonsContainer.innerHTML = '<button class="btn btn-primary filter-btn active" data-filter="all">Todas</button>';
        categories.forEach(category => {
            filterButtonsContainer.innerHTML += `
                <button class="btn btn-primary filter-btn" data-filter="${category}">
                    ${category}
                </button>
            `;
        });

        // Update category list in modal
        categoryList.innerHTML = '';
        categories.forEach(category => {
            categoryList.innerHTML += `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    ${category}
                    <button class="btn btn-danger btn-sm delete-category" data-category="${category}">
                        <i class="bi bi-trash"></i>
                    </button>
                </li>
            `;
        });

        // Reattach filter event listeners for the updated buttons
        document.querySelectorAll('.filter-btn').forEach(button => {
            button.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                const filter = button.getAttribute('data-filter');
                // Call the filtering function from earlier
                filterImages(filter);
            });
        });
    }

    // Add new category event listener
    addCategoryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const newCategory = document.getElementById('newCategory').value.trim().toLowerCase();
        
        if (newCategory && !categories.has(newCategory)) {
            categories.add(newCategory);
            updateCategories();
            document.getElementById('newCategory').value = '';
        }
    });

    // Delete category event listener
    categoryList.addEventListener('click', function(e) {
        if (e.target.closest('.delete-category')) {
            const category = e.target.closest('.delete-category').dataset.category;
            const itemsInCategory = document.querySelectorAll(`.filter.${category}`);
            
            if (itemsInCategory.length > 0) {
                if (confirm(`¿Estás seguro? Se eliminarán ${itemsInCategory.length} imágenes de esta categoría.`)) {
                    itemsInCategory.forEach(item => item.remove());
                    categories.delete(category);
                    updateCategories();
                }
            } else {
                categories.delete(category);
                updateCategories();
            }
        }
    });

    // Initialize categories
    updateCategories();
});
