const Data = [
    {
        "id": 1,
        "title": "first post",
        "tags" : [
            {
                "note" : "oh oh"
            },
            {
                "note" : "one more"
            }
        ]
    }
];

import React from 'react'

function PsNote() {
  return (
    <div>
        {
            Data.map(post => {
                return (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        { post.tags.map((data,idx) => (
                            <div key={idx} >
                                {data.note}
                            </div>
                        ))}
                    </div>
                )
            })
        }
    </div>
  )
}

export default PsNote