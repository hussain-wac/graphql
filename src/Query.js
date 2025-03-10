import { gql } from "@apollo/client";


export const GetContent = gql`
  query GetTopContent {
    contactUsPage {
      title
      description
      right_side_content {
      type
        name
        street
        city
        id
        link
        link_label
        phone
        email
        socialLinks {
        id
        link
        svg_text
        title
      }
      }

    }
  }
`;


export const PostForm = gql`
mutation contactUsFormMutaion(
        $request_type: String!,
        $email: String!,
        $name: String!,
        $telephone: String!,
        $orderNumber: String,
        $comment: String!
        $productSku: String!
    ) {
        submitContactForm(input: {
            request_type: $request_type,
            email: $email
            name: $name
            telephone: $telephone
            order_number: $orderNumber
            comment: $comment
            product_sku: $productSku 
        })
    }
`;


export const GetMessuarements = gql`
query MeasureYourSpace {
  MeasureYourSpacePageCms {
    content
    content_type
    footer_html_block
    header_html_block
    meta_description
    meta_keywords
    meta_title
    title
    __typename
  }
}
`;


export const GetHomePage = gql`
query GetHomePage {
    homepageCms {
      content
      id
      meta_description
      meta_keywords
      meta_title
      og_image
    }
  }
`;



