---
title: Đăng ký nhận tin tức mới nhất
img_path: images/contact.jpg
form_id: contactForm
form_action: /success
form_fields:
  - input_type: text
    name: name
    label: Name
    default_value: Tên (Không bắt buộc)
    is_required: true
  - input_type: email
    name: email
    label: Email
    default_value: Email (bắt buộc để mình liên hệ lại)
    is_required: true
  - input_type: select
    name: subject
    label: Subject
    default_value: Please select
    options:
      - Nhận tin tức tìm gia sư
      - Cập nhật thông tin page
      - Khác
  - input_type: textarea
    name: message
    label: Message
    default_value: Vui lòng để lại tin nhắn tại đây
  - input_type: checkbox
    name: consent
    label: >-
      Tôi hiểu những thông tin này hoàn toàn được nhập với mục đích liên lạc admin.
submit_label: Send Message
seo:
  title: Đăng ký nhận tin tức tuyển gia sư mới nhất
  description: Đăng ký nhận tin tức tuyển gia sư mới nhất
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Get in Touch
      keyName: property
    - name: 'og:description'
      value: Đăng ký nhận tin tức tuyển gia sư mới nhất
      keyName: property
    - name: 'og:image'
      value: images/contact.jpg
      keyName: property
      relativeUrl: true
    - name: 'twitter:card'
      value: summary_large_image
    - name: 'twitter:title'
      value: Get in Touch
    - name: 'twitter:description'
      value: This is the contact page
    - name: 'twitter:image'
      value: images/contact.jpg
      relativeUrl: true
layout: contact
---

Đăng ký nhận tin mới nhất qua email tại đây.
Gửi tin nhắn cho mình tại đây.
