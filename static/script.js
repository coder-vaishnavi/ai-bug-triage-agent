document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('bugForm');
            const submitBtn = document.getElementById('submitBtn');
            const titleInput = document.getElementById('title');
            const historyTextarea = document.getElementById('history');
            const codeTextarea = document.getElementById('code');
            const titleError = document.getElementById('titleError');
            const historyError = document.getElementById('historyError');
            const codeError = document.getElementById('codeError');

            // Auto-resize textareas
            function autoResizeTextarea(textarea) {
                textarea.style.height = 'auto';
                textarea.style.height = textarea.scrollHeight + 'px';
            }

            historyTextarea.addEventListener('input', () => autoResizeTextarea(historyTextarea));
            codeTextarea.addEventListener('input', () => autoResizeTextarea(codeTextarea));

            // Form validation
            form.addEventListener('submit', function(e) {
                let isValid = true;

                // Reset errors
                titleError.style.display = 'none';
                historyError.style.display = 'none';
                codeError.style.display = 'none';

                // Check title
                if (!titleInput.value.trim()) {
                    titleError.style.display = 'block';
                    isValid = false;
                }

                // Check history
                if (!historyTextarea.value.trim()) {
                    historyError.style.display = 'block';
                    isValid = false;
                }

                // Check code
                if (!codeTextarea.value.trim()) {
                    codeError.style.display = 'block';
                    isValid = false;
                }

                if (!isValid) {
                    e.preventDefault();
                    return;
                }

                // Show loading state
                submitBtn.classList.add('loading');
                submitBtn.innerHTML = '<i class="fas fa-spinner"></i> Analyzing...';
                submitBtn.disabled = true;
            });

            // Remove loading state if form submission fails (e.g., on page reload)
            window.addEventListener('load', function() {
                submitBtn.classList.remove('loading');
                submitBtn.innerHTML = '<i class="fas fa-search"></i> Analyze Bug';
                submitBtn.disabled = false;
            });
        });