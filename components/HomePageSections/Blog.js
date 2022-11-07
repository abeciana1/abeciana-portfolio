import React from 'react';
import PageMargin from '../utils/PageMargin'
import SmoothScrollLink from '../utils/SmoothScrollLink'
import FeaturedPostCard from '../utils/FeaturedPostCard'
import PostCard from '../utils/PostCard'

const Blog = ({ posts }) => {
    
    let descPosts = posts.reverse()

    return (
        <React.Fragment>
            <PageMargin>
                <h1
                    className="text-5xl font-reross text-altYellow leading-relaxed"
                >blog</h1>
                <section
                    className="flex text-3xl"
                >
                    <SmoothScrollLink
                        className="mr-5 font-reross cursor-pointer anim-text"
                        activeClass="active"
                        to="recent"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        exact="true"
                        offset={5}
                        linkText="recent posts"
                    />
                    |
                    <SmoothScrollLink
                        className="ml-5 font-reross cursor-pointer anim-text"
                        activeClass="active"
                        to="all"
                        spy={true}
                        smooth={true}
                        duration={1000}
                        exact="true"
                        offset={-100}
                        linkText="all posts"
                    />
                </section>
                    <>
                        <h2
                            id="recent"
                            className="text-4xl font-reross text-altYellow leading-relaxed"
                        >recent posts</h2>
                        <section
                            className="py-12 md:mx-16 lg:mx-44"
                        >
                            <FeaturedPostCard key={descPosts[0].id} post={descPosts[0]} />
                        </section>
                        <section
                            className="pb-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                        >
                            {descPosts.slice(1, 4).map((post) => {
                                return <FeaturedPostCard key={post.id} post={post} />
                            })}
                        </section>
                    </>
                <>
                    <h2
                        id="all"
                        className="text-4xl font-reross text-altYellow leading-relaxed"
                    >all posts</h2>
                    <section
                        className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
                    >
                        {posts.map((post) => {
                            return <PostCard key={post.id} post={post} /> 
                        })}
                    </section>
                </>
            </PageMargin>
        </React.Fragment>
    )
}

export default Blog