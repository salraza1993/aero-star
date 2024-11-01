import SubPageHeroBanner from '@/app/components/common/SubPageHeroBanner'
import BlogCard, { BlogCardContentTypes } from '@/app/components/Pages/HomePage/BlogCard';
import "@/app/assets/scss/Pages/BlogPage/BlogPage.scss";
import HomeClients from '@/app/components/Pages/HomePage/HomeClients';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import { Props } from '../page';

export default function BlogPage({ params: { locale } }: Props): React.ReactElement {
  const translate = useTranslations('NewsPage');
  // Enable static rendering
  setRequestLocale(locale);
  const blogCardData: BlogCardContentTypes[] = [
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magni veritatis adipisci eligendi, in cumque ea consectetur rem facere unde eaque nobis quae soluta qui iusto dolor tenetur exercitationem quidem! eos optio',
      image: '/images/blog-image-1.png',
      imageAlt: 'string',
      date: 'January 20, 2022',
      comments: '05',
      path: '/blogs/blog-1',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magni veritatis adipisci eligendi, in cumque ea consectetur rem facere unde eaque nobis quae soluta qui iusto dolor tenetur exercitationem quidem! eos optio',
      image: '/images/blog-image-2.png',
      imageAlt: 'string',
      date: 'January 20, 2022',
      comments: '05',
      path: '/blogs/blog-1',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magni veritatis adipisci eligendi, in cumque ea consectetur rem facere unde eaque nobis quae soluta qui iusto dolor tenetur exercitationem quidem! eos optio',
      image: '/images/blog-image-3.png',
      imageAlt: 'string',
      date: 'January 20, 2022',
      comments: '05',
      path: '/blogs/blog-1',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magni veritatis adipisci eligendi, in cumque ea consectetur rem facere unde eaque nobis quae soluta qui iusto dolor tenetur exercitationem quidem! eos optio',
      image: '/images/blog-image-1.png',
      imageAlt: 'string',
      date: 'January 20, 2022',
      comments: '05',
      path: '/blogs/blog-1',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magni veritatis adipisci eligendi, in cumque ea consectetur rem facere unde eaque nobis quae soluta qui iusto dolor tenetur exercitationem quidem! eos optio',
      image: '/images/blog-image-2.png',
      imageAlt: 'string',
      date: 'January 20, 2022',
      comments: '05',
      path: '/blogs/blog-1',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magni veritatis adipisci eligendi, in cumque ea consectetur rem facere unde eaque nobis quae soluta qui iusto dolor tenetur exercitationem quidem! eos optio',
      image: '/images/blog-image-3.png',
      imageAlt: 'string',
      date: 'January 20, 2022',
      comments: '05',
      path: '/blogs/blog-1',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magni veritatis adipisci eligendi, in cumque ea consectetur rem facere unde eaque nobis quae soluta qui iusto dolor tenetur exercitationem quidem! eos optio',
      image: '/images/blog-image-1.png',
      imageAlt: 'string',
      date: 'January 20, 2022',
      comments: '05',
      path: '/blogs/blog-1',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magni veritatis adipisci eligendi, in cumque ea consectetur rem facere unde eaque nobis quae soluta qui iusto dolor tenetur exercitationem quidem! eos optio',
      image: '/images/blog-image-2.png',
      imageAlt: 'string',
      date: 'January 20, 2022',
      comments: '05',
      path: '/blogs/blog-1',
    },
    {
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magni veritatis adipisci eligendi, in cumque ea consectetur rem facere unde eaque nobis quae soluta qui iusto dolor tenetur exercitationem quidem! eos optio',
      image: '/images/blog-image-3.png',
      imageAlt: 'string',
      date: 'January 20, 2022',
      comments: '05',
      path: '/blogs/blog-1',
    },
  ];

  return <>
    <h1>{translate('title')}</h1>
    
    <SubPageHeroBanner title='Blogs' />
    <section className="blog-listing-section">
      <div className="container">
        <div className="blog-listing-content">
          <main>
            <div className="row gy-5">
              {
                blogCardData.map((card, index) => (
                  <div key={index} className="col-12 col-md-6">
                    <BlogCard
                      title={card.title}
                      description={card.description}
                      image={card.image}
                      imageAlt={card.imageAlt}
                      date={card.date}
                      comments={card.comments}
                      path={card.path}
                    />
                  </div>
                ))
              }
            </div>
          </main>
          <aside>
            aside bar
          </aside>
        </div>
      </div>
    </section>
    <HomeClients />
  </>
}
export const dynamicParams = true; // Enables dynamic params for static rendering
