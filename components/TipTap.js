'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { useEffect, useState } from 'react';

const BlogPostEditor = () => {
  // const [content, setContent] = useState('');
  const [title, setTitle] = useState('')
  const [categories, setCategories] = useState('')
  const [error, setError] = useState('')
  const [msg, setMsg] = useState('')

  const editor = useEditor({
    extensions: [
      StarterKit,
      // Add other extensions as needed
    ],
    content: `<p>Write your content here!</p>`, // Optional, initial content for the editor
  })

  const handleSubmit = async () => {
    const editorContent = editor.getJSON()
    // Do something with the content, e.g., send it to the server
    const data = await fetch('https://fintech-blog-749ab6e21c45.herokuapp.com/posts/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        categories,
        content: editorContent
      })
    })
    if (data.status !== 200) {
      console.log(data)
      setError(data.message)
    }
    setMsg(data.message)
  }

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('https://fintech-blog-749ab6e21c45.herokuapp.com/categories')
      const data = await response.json()
      console.log(data)
      setCategories(data)
    }
    fetchCategories()
  }, [])

  return (
    <div>
      {msg && <p className='text-green'>{msg}</p>}
      <div>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div>
          Select category:
          <select>
            {categories && Array.isArray(categories) && categories.length > 0 ? (
              categories.map((category) => (
                <option
                  key={category.id}
                  value={category.name}
                  onChange={(e) => setCategories(e.target.value)}
                >
                  {category.name}
                </option>
              ))
            ) : (
              <option value="">No categories available</option>
            )}
          </select>
        </div>
      </div>

      <EditorContent editor={editor} className='border border-solid border-primary-green' />
      <button onClick={handleSubmit}>Submit</button>
      {error && <p className='text-red'>{error}</p>}
    </div>
  )
};

export default BlogPostEditor