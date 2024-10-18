const blogs = [];

function addBlog(event) {
  event.preventDefault();

  const inputBlogTitle = document.getElementById("input-blog-title").value;
  const inputBlogContent = document.getElementById("input-blog-content").value;
  const inputBlogImage = document.getElementById("input-blog-image").files;

  const image = URL.createObjectURL(inputBlogImage[0]);

  const blog = {
    title: inputBlogTitle,
    content: inputBlogContent,
    createdAt: new Date(),
    image: image,
  };

  blogs.unshift(blog);
  console.log(blogs);
  renderBlog();

  //   renderBlog di taro disitu supaya nge menjalankan fungsu addBlog (menambah item)
}

function renderBlog() {
  let html = ``;
  //   for looping
  for (let index = 0; index < blogs.length; index++) {
    // menambah html blog
    // blogs.length supaya otomatis dari blog yg ditambahkan
    // menggunakan += untuk memamnggil data sebelumnya terlebih dahulu baru di + kan
    html += `<div class="blog-list-item">
          <div class="blog-image">
            <img src="${blogs[index].image}" alt="" />
          </div>
          <div class="blog-content">
            <div class="btn-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-post" onclick="deleteBlog(${index})">Delete Post</button>
            </div>
            <h1>
              <a href="blog-detail.html" target="_blank"
                >${blogs[index].title}</a
              >
            </h1>
            <div class="detail-blog-content">
                ${getFullTime(blogs[index].createdAt)} | daffa
            </div>
            <p>
              ${blogs[index].content}
            </p>
            <p>
                ${getDistanceTime(blogs[index].createdAt)}
            </p>
          </div>
        </div>`;
  }

  document.getElementById("contents").innerHTML = html;
}
