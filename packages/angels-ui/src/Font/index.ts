import FontSize from './FontSize';
import FontWeight from './FontWeight';

/**
 * <hr/>
 * @description { h1 } font-size: 42px; line-height: 140%;
 * @description { h2 } font-size: 30px; line-height: 140%;
 * @description { h3 } font-size: 24px; line-height: 140%;
 * @description { h4 } font-size: 18px; line-height: 140%;
 * @description { p1 } font-size: 16px; line-height: 140%;
 * @description { p2 } font-size: 14px; line-height: 140%;
 * @description { p3 } font-size: 12px; line-height: 140%;
 * @description { p4 } font-size: 10px; line-height: 140%;
 * <hr/>
 * @description { extrabold } font-weight: 800;
 * @description { bold } font-weight: 700;
 * @description { semibold } font-weight: 600;
 * @description { medium } font-weight: 500;
 * @description { regular } font-weight: 400;
 * <hr/>
 */
export default Object.assign({}, { ...FontSize, ...FontWeight });
