<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Dynamic Page with JavaScript</title>
</head>
<body>
    <script>
        // -------- Create and insert CSS --------
        const style = document.createElement('style');
        style.textContent = `
            body {
                margin: 0;
                font-family: Arial, sans-serif;
            }

            .container {
                display: flex;
                flex-direction: column;
                height: 100vh;
                border: 1px solid black;
            }

            .header {
                display: flex;
                justify-content: space-between;
                padding: 10px 20px;
                border-bottom: 1px solid #ccc;
            }

            .main {
                display: flex;
                flex: 1;
            }

            .sidebar {
                width: 120px;
                padding: 10px;
                border-right: 1px solid #ccc;
            }

            .content {
                flex: 1;
                padding: 20px;
            }

            .article {
                background-color: #d3d3d3;
                height: 150px;
                margin-bottom: 20px;
            }

            .comment-label {
                text-align: right;
                margin-bottom: 5px;
            }

            .comment-box {
                background-color: #d3d3d3;
                height: 50px;
            }

            button {
                padding: 6px 12px;
                cursor: pointer;
            }
        `;
        document.head.appendChild(style);

        // -------- Create HTML structure using JS --------
        const container = document.createElement('div');
        container.className = 'container';

        // Header
        const header = document.createElement('div');
        header.className = 'header';

        const title = document.createElement('div');
        title.textContent = 'Title';

        const button = document.createElement('button');
        button.textContent = '+Create article';
        button.onclick = () => alert('Create article button clicked!');

        header.appendChild(title);
        header.appendChild(button);
        container.appendChild(header);

        // Main Section
        const main = document.createElement('div');
        main.className = 'main';

        // Sidebar
        const sidebar = document.createElement('div');
        sidebar.className = 'sidebar';
        ['Home', 'Trending', 'Explore'].forEach(text => {
            const item = document.createElement('div');
            item.textContent = text;
            sidebar.appendChild(item);
        });

        // Content Area
        const content = document.createElement('div');
        content.className = 'content';

        const article = document.createElement('div');
        article.className = 'article';

        const commentLabel = document.createElement('div');
        commentLabel.className = 'comment-label';
        commentLabel.textContent = 'Add comment';

        const commentBox = document.createElement('div');
        commentBox.className = 'comment-box';

        content.appendChild(article);
        content.appendChild(commentLabel);
        content.appendChild(commentBox);

        // Combine and append
        main.appendChild(sidebar);
        main.appendChild(content);
        container.appendChild(main);

        document.body.appendChild(container);
    </script>
</body>
</html>
