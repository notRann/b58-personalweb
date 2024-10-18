const blogs = [];

function addBlog(event) {
  event.preventDefault();

  const inputBlogTitle = document.getElementById("input-blog-title").value;
  const startDate = document.getElementById("start-date").value;
  const endDate = document.getElementById("end-date").value;
  const inputBlogContent = document.getElementById("input-blog-content").value;
  const inputBlogImage = document.getElementById("input-blog-image").files;
  //   cbSelected = [];

  //   const checkbox = document.querySelectorAll("input[type=checkbox]");
  //   for (let i = 0; i < checkbox.length; i++) {
  //     if (document.getElementById(checkbox[i].value).checked == true) {
  //       cbSelected.push(checkbox[i].value);
  //     }
  //   }

  //   checkbox belum selesai

  const image = URL.createObjectURL(inputBlogImage[0]);
  //   blob

  const blog = {
    title: inputBlogTitle,
    content: inputBlogContent,
    startDate: startDate,
    endDate: endDate,
    // start sama end buat buat date
    createdAt: new Date(),
    image: image,
    // image diatas diambil dari const image(blob) agar bisa di eksekusi saat memanggil array blogs bersama dengan object yg lainnya
  };

  blogs.unshift(blog);
  console.log(blogs);
  renderBlog();

  //   renderBlog di taro disitu supaya menjalankan fungsi addBlog (menambah item) lebih dulu baru mengeksekusi renderblog
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
                >${blogs[index].title}</a>
            </h1>
            <div class="detail-blog-content">
            ${getFullTime(blogs[index].createdAt)} | daffa
            </div>
            <p>
              ${blogs[index].content}
            </p>
          </div>
        </div>`;

    // $blogs index.image|title dan content merupakan src dari blog pada array blogs, tujuan mendefinisikan title | image | content, karena itu dinamakan seperti itu dan memanggil pada akhir statment dimaksudkan untuk memanggil hanya "itunya saja". jila .title, maka yg dipanggil hanya titlenya saja.
  }

  document.getElementById("contents").innerHTML = html;
}
function deleteBlog(index) {
  blogs.splice(index, 1);
  renderBlog();
}
// menghapus index tertentu dengan splice, parameter dilempar pada bagian delete blog dan di taruh pada parameter agar dapat ditangkap lagi

function getFullTime(date) {
  // perlu diingat penamaan parameter bebas
  const months = [
    "Jan",
    "Feb",
    "Marc",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const tanggal = date.getDate();
  const bulan = months[date.getMonth()];
  const tahun = date.getFullYear();

  let jam = date.getHours();
  let menit = date.getMinutes();

  if (jam < 10) {
    jam = "0" + jam;
  }

  if (menit < 10) {
    menit = "0" + menit;
  }

  return `${tanggal} ${bulan} ${tahun} ${jam}:${menit} WIB`;
}

function esdate(startDate, endDate) {}
// fungsi untuk start dan end date
function getDistanceTime() {}
// fungsi untuk durasi (pakai interval aja di akhir)
