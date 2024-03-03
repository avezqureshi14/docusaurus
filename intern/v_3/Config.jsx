import config from '../../config.json';
import '../template/config.css'; 

const Config = () => {
  return (
    <div className="config-main-container">
      <table className="config-table">
        <tbody>
          <tr>
            <td className="label">Product Name:</td>
            <td className="value">{config.productName}</td>
          </tr>
          <tr>
            <td className="label">Theme Color:</td>
            <td className="value theme-color">{config.themeColor}</td>
          </tr>
          <tr>
            <td className="label">Support:</td>
            <td className="value"><a href={config.productLinks.support} className="support-link">Support &#10532; </a></td>
          </tr>
          <tr>
            <td className="label">Product Page:</td>
            <td className="value"><a href={config.productLinks.productPage} className="product-page-link"> Product Page &#10532;</a></td>
          </tr>
          <tr>
            <td className="label">Documentation:</td>
            <td className="value"><a href={config.productLinks.documentation} className="documentation-link"> Documentation &#10532;</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Config;
