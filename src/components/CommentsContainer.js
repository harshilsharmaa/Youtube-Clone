import React from 'react'
import Comment from './Comment'

const comments = [
    {
        name: "Harshil Sharma",
        text: "klha adsf kasd kh kljkfd kk adkn nkda kdkfn",
        id: 4355463,
        replies: [
            {
                name: "Harshil Sharma",
                text: "klha adsf kasd kh kljkfd kk adkn nkda kdkfn",
                id: 43589693,
                replies: [
                    {
                        name: "Harshil Sharma",
                        text: "klha adsf kasd kh kljkfd kk adkn nkda kdkfn",
                        id: 43756363,
                        replies: [
                            
                        ]
                    }
                ]
            },
            {
                name: "Harshil Sharma",
                text: "klha adsf kasd kh kljkfd kk adkn nkda kdkfn",
                id: 655463,
                replies: [
                    {
                        name: "Harshil Sharma",
                        text: "klha adsf kasd kh kljkfd kk adkn nkda kdkfn",
                        id: 78833457,
                        replies: [
                            {
                                name: "Harshil Sharma",
                                text: "klha adsf kasd kh kljkfd kk adkn nkda kdkfn",
                                id: 8767634,
                                replies: [
                                    {
                                        name: "Harshil Sharma",
                                        text: "klha adsf kasd kh kljkfd kk adkn nkda kdkfn",
                                        id: 6754764,
                                        replies: [
                                            
                                        ]
                                    },
                                    {
                                        name: "Harshil Sharma",
                                        text: "klha adsf kasd kh kljkfd kk adkn nkda kdkfn",
                                        id: 87784425,
                                        replies: [
                                            
                                        ]
                                    }
                                ]
                            }
                        ]
                    } 
                ]
            }
        ]
    },
    {
        name: "Harshil Sharma",
        text: "klha adsf kasd kh kljkfd kk adkn nkda kdkfn",
        id: 8794543,
        replies: [
            {
                name: "Harshil Sharma",
                text: "klha adsf kasd kh kljkfd kk adkn nkda kdkfn",
                id: 7865644,
                replies: [
                    {
                        name: "Harshil Sharma",
                        text: "klha adsf kasd kh kljkfd kk adkn nkda kdkfn",
                        id: 8978453,
                        replies: [
                            
                        ]
                    }
                ]
            }
        ]
    }
]

const CommentsContainer = () => {
  return (
    <div className="mt-4">
        <h1 className="font-bold text-xl">Comments:</h1>
        {
            comments.map((comment)=>{
                return <Comment data={comment} key={comment.id} />
            })
        }
    </div>
  )
}

export default CommentsContainer