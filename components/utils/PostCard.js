import React from 'react';
import Link from 'next/link'



const PostCard = ({ post }) => {
    
    console.log(post.properties);

// {
//     "Tags": {
//         "id": "3342",
//         "type": "multi_select",
//         "multi_select": [
//             {
//                 "id": "4c649c98-0f05-4bcb-a5f9-e3a115afff5f",
//                 "name": "Flatiron School",
//                 "color": "brown"
//             },
//             {
//                 "id": "3aa78d02-2507-4c7c-acf7-de84ac2beddf",
//                 "name": "Burnout",
//                 "color": "blue"
//             },
//             {
//                 "id": "5764e13b-ab06-402a-a118-349498c7c45b",
//                 "name": "Coding Bootcamp",
//                 "color": "red"
//             },
//             {
//                 "id": "749bd5b3-b4cb-4e69-9a2c-4ca5ef32eccb",
//                 "name": "Learning",
//                 "color": "brown"
//             },
//             {
//                 "id": "1ab22db9-b2eb-4508-bea4-ff9d6d8acf7d",
//                 "name": "Education",
//                 "color": "green"
//             },
//             {
//                 "id": "23fd49a5-dcae-41ac-8503-f5b57cf3080c",
//                 "name": "Productivity",
//                 "color": "gray"
//             }
//         ]
//     },
//     "Slug": {
//         "id": "2lD%2B",
//         "type": "rich_text",
//         "rich_text": [
//             {
//                 "type": "text",
//                 "text": {
//                     "content": "/after-graduation-2",
//                     "link": null
//                 },
//                 "annotations": {
//                     "bold": false,
//                     "italic": false,
//                     "strikethrough": false,
//                     "underline": false,
//                     "code": false,
//                     "color": "default"
//                 },
//                 "plain_text": "/after-graduation-2",
//                 "href": null
//             }
//         ]
//     },
//     "Additional Link to Share": {
//         "id": "%3Bp4.",
//         "type": "rich_text",
//         "rich_text": []
//     },
//     "Files": {
//         "id": "LHZ_",
//         "type": "files",
//         "files": []
//     },
//     "Featured Image": {
//         "id": "MB%7DR",
//         "type": "files",
//         "files": []
//     },
//     "Status": {
//         "id": "%7CnIj",
//         "type": "select",
//         "select": {
//             "id": "6d64b34b-6732-47ac-ac3f-a3b31f111148",
//             "name": "Published",
//             "color": "green"
//         }
//     },
//     "Published Date": {
//         "id": "%7Ds%7Bw",
//         "type": "date",
//         "date": {
//             "start": "2021-03-14",
//             "end": null
//         }
//     },
//     "Name": {
//         "id": "title",
//         "type": "title",
//         "title": [
//             {
//                 "type": "text",
//                 "text": {
//                     "content": "What I've learned since graduating a coding bootcamp, Part 2",
//                     "link": null
//                 },
//                 "annotations": {
//                     "bold": false,
//                     "italic": false,
//                     "strikethrough": false,
//                     "underline": false,
//                     "code": false,
//                     "color": "default"
//                 },
//                 "plain_text": "What I've learned since graduating a coding bootcamp, Part 2",
//                 "href": null
//             }
//         ]
//     }
// }


    return (
        <React.Fragment>
            <Link
                href={`/blog/${post["properties"]["Slug"]["rich_text"][0]["plain_text"]}`}
            >
                <a>{`${post["properties"]["Slug"]["rich_text"][0]["plain_text"]}`}</a>
            </Link>
        </React.Fragment>
    )
}

export default PostCard