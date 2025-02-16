"use client";
import { usePathname } from "next/navigation";
import styles from "./filtersItems.module.css"
import { useState } from "react";

const FiltersItems = () => {
  const [hoveredColor, setHoveredColor] = useState(null);

  const pathname = usePathname();
  const colours = [
    "#F5F5DC", "#00B0B9", "#00B0B9", "#00BFFF", "#0000FF", "#000080",
    "#9FFEB0", "#84BD00", "#78866B", "#FFFF00", "#FFE5B4", "#FFA500", "#FFA500", "#FFC0CB",
    "#C8A2C8", "#8B00FF", "#808080", "#000000", "#555555", "linear-gradient(90deg, #FF5733,rgb(42, 222, 75), #3357FF)"
  ];

  return (
    <>
      {pathname === '/backpacks' && (
        <>
          <article className={styles.products_groop}>
            <h4>Група товарів</h4>
            <span><input type="checkbox" />Для дітей</span>
            <span><input type="checkbox" />Для школи</span>
            <span><input type="checkbox" />Старша школа і дорослі</span>
          </article>
          <article className={styles.products_groop}>
            <h4>Колір</h4>
            <div className={styles.products_groop__colours}>
              {colours.map((item, i) => {
                return <div key={i} style={{ background: item, border: "1px solid" }}></div>
              })}
            </div>
          </article>
          <article className={styles.products_groop}>
            <h4>Для кого:</h4>
            <div className={styles.products_groop__gender}>
              <span>
                <svg enableBackground="new 0 0 50 50" height="50px" viewBox="0 0 50 50" width="50px">
                  <circle cx="25" cy="25" fill="none" r="24" stroke="#000000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
                  <rect fill="none" height="50" width="50" />
                  <path d="M29.933,35.528c-0.026-0.287-0.045-0.748-0.06-1.226c4.345-0.445,7.393-1.487,7.393-2.701  c-0.012-0.002-0.011-0.05-0.011-0.07c-3.248-2.927,2.816-23.728-8.473-23.306c-0.709-0.6-1.95-1.133-3.73-1.133  c-15.291,1.157-8.53,20.8-12.014,24.508c-0.002,0.001-0.005,0.001-0.007,0.001c0,0.002,0.001,0.004,0.001,0.006  c0,0.001-0.001,0.002-0.001,0.002s0.001,0,0.002,0.001c0.014,1.189,2.959,2.212,7.178,2.668c-0.012,0.29-0.037,0.649-0.092,1.25  c-1.282,3.447-7.958,3.663-11.659,7.092c2.023,1.766,9.072,6.508,16.634,6.508s13.842-3.589,16.346-6.608  C37.731,39.188,31.202,38.941,29.933,35.528z" />
                </svg>
              </span>
              <span>
                <svg enableBackground="new 0 0 50 50" height="50px" viewBox="0 0 50 50" width="50px">
                  <circle cx="25" cy="25" fill="none" r="24" stroke="#000000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
                  <rect fill="none" height="50" width="50" />
                  <path d="M29.933,35.528c-0.146-1.612-0.09-2.737-0.09-4.21c0.73-0.383,2.038-2.825,2.259-4.888c0.574-0.047,1.479-0.607,1.744-2.818  c0.143-1.187-0.425-1.855-0.771-2.065c0.934-2.809,2.874-11.499-3.588-12.397c-0.665-1.168-2.368-1.759-4.581-1.759  c-8.854,0.163-9.922,6.686-7.981,14.156c-0.345,0.21-0.913,0.878-0.771,2.065c0.266,2.211,1.17,2.771,1.744,2.818  c0.22,2.062,1.58,4.505,2.312,4.888c0,1.473,0.055,2.598-0.091,4.21c-1.261,3.39-7.737,3.655-11.473,6.924  c3.906,3.933,10.236,6.746,16.916,6.746s14.532-5.274,15.839-6.713C37.688,39.186,31.197,38.93,29.933,35.528z" />
                </svg>
              </span>
            </div>
          </article>
          <article className={styles.products_groop}>
            <h4>Виробник</h4>
            <span><input type="checkbox" />Бренд1</span>
            <span><input type="checkbox" />Бренд1</span>
            <span><input type="checkbox" />Бренд1</span>
          </article>
          <article className={styles.products_groop}>
            <h4>Классифікація</h4>
            <span><input type="checkbox" />Каркасні</span>
            <span><input type="checkbox" />Напівкаркасні</span>
            <span><input type="checkbox" />М'які</span>
          </article>
          <article className={styles.products_groop}>
            <h4>Конструкція спинки</h4>
            <span><input type="checkbox" />Анатомічна</span>
            <span><input type="checkbox" />AGS</span>
            <span><input type="checkbox" />Ортопедична</span>
            <span><input type="checkbox" />Ущільнена</span>
            <span><input type="checkbox" />З дихаючою сіткою</span>
          </article>
          <article className={styles.products_groop}>
            <h4>Кількість відділень</h4>
            <span><input type="checkbox" />1</span>
            <span><input type="checkbox" />2</span>
            <span><input type="checkbox" />3</span>
          </article>
        </>
      )}
      {(pathname === '/allProducts' || pathname === '/') && (
        <>
          <article className={styles.products_groop}>
            <h4>Група товарів</h4>
            <span><input type="checkbox" />Рюкзаки</span>
            <span><input type="checkbox" />Сумки</span>
            <span><input type="checkbox" />Гаманці</span>
          </article>
          <article className={styles.products_groop}>
            <h4>Колір</h4>
            <div className={styles.products_groop__colours}>
              {colours.map((item, i) => {
                return <div key={i} style={{ background: item, border: "1px solid" }}></div>
              })}
            </div>
          </article>
          <article className={styles.products_groop}>
            <h4>Для кого:</h4>
            <div className={styles.products_groop__gender}>
              <span>
                <svg enableBackground="new 0 0 50 50" height="50px" viewBox="0 0 50 50" width="50px">
                  <circle cx="25" cy="25" fill="none" r="24" stroke="#000000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
                  <rect fill="none" height="50" width="50" />
                  <path d="M29.933,35.528c-0.026-0.287-0.045-0.748-0.06-1.226c4.345-0.445,7.393-1.487,7.393-2.701  c-0.012-0.002-0.011-0.05-0.011-0.07c-3.248-2.927,2.816-23.728-8.473-23.306c-0.709-0.6-1.95-1.133-3.73-1.133  c-15.291,1.157-8.53,20.8-12.014,24.508c-0.002,0.001-0.005,0.001-0.007,0.001c0,0.002,0.001,0.004,0.001,0.006  c0,0.001-0.001,0.002-0.001,0.002s0.001,0,0.002,0.001c0.014,1.189,2.959,2.212,7.178,2.668c-0.012,0.29-0.037,0.649-0.092,1.25  c-1.282,3.447-7.958,3.663-11.659,7.092c2.023,1.766,9.072,6.508,16.634,6.508s13.842-3.589,16.346-6.608  C37.731,39.188,31.202,38.941,29.933,35.528z" />
                </svg>
              </span>
              <span>
                <svg enableBackground="new 0 0 50 50" height="50px" viewBox="0 0 50 50" width="50px">
                  <circle cx="25" cy="25" fill="none" r="24" stroke="#000000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
                  <rect fill="none" height="50" width="50" />
                  <path d="M29.933,35.528c-0.146-1.612-0.09-2.737-0.09-4.21c0.73-0.383,2.038-2.825,2.259-4.888c0.574-0.047,1.479-0.607,1.744-2.818  c0.143-1.187-0.425-1.855-0.771-2.065c0.934-2.809,2.874-11.499-3.588-12.397c-0.665-1.168-2.368-1.759-4.581-1.759  c-8.854,0.163-9.922,6.686-7.981,14.156c-0.345,0.21-0.913,0.878-0.771,2.065c0.266,2.211,1.17,2.771,1.744,2.818  c0.22,2.062,1.58,4.505,2.312,4.888c0,1.473,0.055,2.598-0.091,4.21c-1.261,3.39-7.737,3.655-11.473,6.924  c3.906,3.933,10.236,6.746,16.916,6.746s14.532-5.274,15.839-6.713C37.688,39.186,31.197,38.93,29.933,35.528z" />
                </svg>
              </span>
            </div>
          </article>
          <article className={styles.products_groop}>
            <h4>Виробник</h4>
            <span><input type="checkbox" />Бренд1</span>
            <span><input type="checkbox" />Бренд1</span>
            <span><input type="checkbox" />Бренд1</span>
          </article>
        </>
      )}
      {(pathname === '/bags') && (
        <>
          <article className={styles.products_groop}>
            <h4>Група товарів</h4>
            <span><input type="checkbox" />Бананки</span>
            <span><input type="checkbox" />Сумки-шопери</span>
            <span><input type="checkbox" />Сумки крос-боді</span>
            <span><input type="checkbox" />Сумки для взуття</span>
          </article>
          <article className={styles.products_groop}>
            <h4>Колір</h4>
            <div className={styles.products_groop__colours}>
              {colours.map((item, i) => {
                return <div key={i} style={{ background: item, border: "1px solid" }}></div>
              })}
            </div>
          </article>
          <article className={styles.products_groop}>
            <h4>Для кого:</h4>
            <div className={styles.products_groop__gender}>
              <span>
                <svg enableBackground="new 0 0 50 50" height="50px" viewBox="0 0 50 50" width="50px">
                  <circle cx="25" cy="25" fill="none" r="24" stroke="#000000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
                  <rect fill="none" height="50" width="50" />
                  <path d="M29.933,35.528c-0.026-0.287-0.045-0.748-0.06-1.226c4.345-0.445,7.393-1.487,7.393-2.701  c-0.012-0.002-0.011-0.05-0.011-0.07c-3.248-2.927,2.816-23.728-8.473-23.306c-0.709-0.6-1.95-1.133-3.73-1.133  c-15.291,1.157-8.53,20.8-12.014,24.508c-0.002,0.001-0.005,0.001-0.007,0.001c0,0.002,0.001,0.004,0.001,0.006  c0,0.001-0.001,0.002-0.001,0.002s0.001,0,0.002,0.001c0.014,1.189,2.959,2.212,7.178,2.668c-0.012,0.29-0.037,0.649-0.092,1.25  c-1.282,3.447-7.958,3.663-11.659,7.092c2.023,1.766,9.072,6.508,16.634,6.508s13.842-3.589,16.346-6.608  C37.731,39.188,31.202,38.941,29.933,35.528z" />
                </svg>
              </span>
              <span>
                <svg enableBackground="new 0 0 50 50" height="50px" viewBox="0 0 50 50" width="50px">
                  <circle cx="25" cy="25" fill="none" r="24" stroke="#000000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
                  <rect fill="none" height="50" width="50" />
                  <path d="M29.933,35.528c-0.146-1.612-0.09-2.737-0.09-4.21c0.73-0.383,2.038-2.825,2.259-4.888c0.574-0.047,1.479-0.607,1.744-2.818  c0.143-1.187-0.425-1.855-0.771-2.065c0.934-2.809,2.874-11.499-3.588-12.397c-0.665-1.168-2.368-1.759-4.581-1.759  c-8.854,0.163-9.922,6.686-7.981,14.156c-0.345,0.21-0.913,0.878-0.771,2.065c0.266,2.211,1.17,2.771,1.744,2.818  c0.22,2.062,1.58,4.505,2.312,4.888c0,1.473,0.055,2.598-0.091,4.21c-1.261,3.39-7.737,3.655-11.473,6.924  c3.906,3.933,10.236,6.746,16.916,6.746s14.532-5.274,15.839-6.713C37.688,39.186,31.197,38.93,29.933,35.528z" />
                </svg>
              </span>
            </div>
          </article>
        </>

      )}
      {(pathname === '/wallets') && (
        <>
          <article className={styles.products_groop}>
            <h4>Колір</h4>
            <div className={styles.products_groop__colours}>
              {colours.map((item, i) => {
                return <div key={i} style={{ background: item, border: "1px solid" }}></div>
              })}
            </div>
          </article>
          <article className={styles.products_groop}>
            <h4>Для кого:</h4>
            <div className={styles.products_groop__gender}>
              <span>
                <svg enableBackground="new 0 0 50 50" height="50px" viewBox="0 0 50 50" width="50px">
                  <circle cx="25" cy="25" fill="none" r="24" stroke="#000000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
                  <rect fill="none" height="50" width="50" />
                  <path d="M29.933,35.528c-0.026-0.287-0.045-0.748-0.06-1.226c4.345-0.445,7.393-1.487,7.393-2.701  c-0.012-0.002-0.011-0.05-0.011-0.07c-3.248-2.927,2.816-23.728-8.473-23.306c-0.709-0.6-1.95-1.133-3.73-1.133  c-15.291,1.157-8.53,20.8-12.014,24.508c-0.002,0.001-0.005,0.001-0.007,0.001c0,0.002,0.001,0.004,0.001,0.006  c0,0.001-0.001,0.002-0.001,0.002s0.001,0,0.002,0.001c0.014,1.189,2.959,2.212,7.178,2.668c-0.012,0.29-0.037,0.649-0.092,1.25  c-1.282,3.447-7.958,3.663-11.659,7.092c2.023,1.766,9.072,6.508,16.634,6.508s13.842-3.589,16.346-6.608  C37.731,39.188,31.202,38.941,29.933,35.528z" />
                </svg>
              </span>
              <span>
                <svg enableBackground="new 0 0 50 50" height="50px" viewBox="0 0 50 50" width="50px">
                  <circle cx="25" cy="25" fill="none" r="24" stroke="#000000" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" />
                  <rect fill="none" height="50" width="50" />
                  <path d="M29.933,35.528c-0.146-1.612-0.09-2.737-0.09-4.21c0.73-0.383,2.038-2.825,2.259-4.888c0.574-0.047,1.479-0.607,1.744-2.818  c0.143-1.187-0.425-1.855-0.771-2.065c0.934-2.809,2.874-11.499-3.588-12.397c-0.665-1.168-2.368-1.759-4.581-1.759  c-8.854,0.163-9.922,6.686-7.981,14.156c-0.345,0.21-0.913,0.878-0.771,2.065c0.266,2.211,1.17,2.771,1.744,2.818  c0.22,2.062,1.58,4.505,2.312,4.888c0,1.473,0.055,2.598-0.091,4.21c-1.261,3.39-7.737,3.655-11.473,6.924  c3.906,3.933,10.236,6.746,16.916,6.746s14.532-5.274,15.839-6.713C37.688,39.186,31.197,38.93,29.933,35.528z" />
                </svg>
              </span>
            </div>
          </article>
        </>
      )}
    </>
  )

}

export default FiltersItems;