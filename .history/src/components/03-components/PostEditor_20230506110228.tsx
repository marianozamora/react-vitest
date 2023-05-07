import React, { useState } from 'react';

const PostEditor: React.FC = () => {
    const [content, setContent] = useState('');

    const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setContent(event.target.value);
    };

    const handleSave = () => {
        // Perform save operation with the content
        console.log('Saving post:', content);
    };

    return (
        <div>
        <h2>Post Editor</h2>
        <textarea
            value={content}
            onChange={handleContentChange}
            rows={8}
            cols={40}
        />
        <button onClick={handleSave}>Save Post</button>
        </div>
    );
};

export default PostEditor;
