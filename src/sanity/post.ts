import { defineField, defineType, defineArrayMember } from "sanity";

export const post = defineType({
  name: "post",
  type: "document",
  title: "Post",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Post Title",
      description: "Title of the post",
      placeholder: "Post Title",
      validation: (Rule) => Rule.required().error("This field is required!"),
    }),
    //slug field
    defineField({
        name: "slug",
      type: "slug",
      title: "Slug",
      options:{
        source:'title',
        maxLength:96,

      },
      validation:Rule => Rule.required()
    }),
    defineField({
        name: 'summary',
        type: 'text',
        title: 'Post Summary',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'image',
        type: 'image',
        title: 'Post Image',

    }),
    defineField({
        name: 'content',
        type: 'array',
        title: 'Post Content',
        of: [
            defineArrayMember({
                type: 'block'
            })],
        
    }),
    defineField({
        name: 'author',
        type: 'reference',
        title: 'Author',
        to:[{
            type: 'author'
        }]
    }),

    // {
    //     name: 'gender',
    //     type:'string',
    //     title: 'Gender',
    //     options:{
    //         list:[
    //             {title:'Male', value:'male'},
    //             {title:'Female', value:'female'}
    //         ],
    //         layout: 'radio',
    //         direction: 'horizontal'
    //     }
    // }
  ],
});
